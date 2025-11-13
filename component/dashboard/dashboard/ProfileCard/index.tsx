"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, Check, X } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import { showToast } from "nextjs-toast-notify";
import { getApiEndpoint } from "@/app/api";
import apiClient from "@/app/api/apiClient";


// ---------------------------------------------------------------
// Types
// ---------------------------------------------------------------

interface UserProfile {
  name: string;
  email: string;
  role: string;
  status: string;
}
interface ApiResponse {
  message: string 
}
interface JwtPayload {
  id: string;          // <-- must be in your JWT
  name?: string;
  email?: string;
  role?: string;
  status?: string;
  iat?: number;
  exp?: number;
}

interface ApiResponse {
  message: string;
}

export async function updateUserProfile(updates: Partial<UserProfile>): Promise<void> {
  const token = Cookies.get("accessToken") || "";

  if (!token) {
    showToast.error("Authentication token missing", {
      duration: 4000,
      position: "top-right",
      progress: true,
    });
    throw new Error("No access token");
  }

  let decoded: JwtPayload;
  try {
    decoded = jwtDecode<JwtPayload>(token);
  } catch (err) {
    showToast.error("Invalid token", {
      duration: 4000,
      position: "top-right",
      progress: true,
    });
    throw new Error("Invalid token");
  }
  try {
    const res = await apiClient.put<ApiResponse>(getApiEndpoint.updateUser(decoded.id), updates);

    showToast.success(res.data.message || "Profile updated successfully!", {
      duration: 4000,
      position: "top-right",
      progress: true,
    });

    // Optional: update cookie with new values
    Object.entries(updates).forEach(([key, value]) => {
      if (value !== undefined) {
        Cookies.set(key, value as string, { expires: 30, sameSite: "strict" });
      }
    });
  } catch (err: any) {
    const msg =
      err.response?.data?.message ||
      err.message ||
      "Failed to update profile";

    showToast.error(msg, {
      duration: 4000,
      position: "top-right",
      progress: true,
    });

    throw err; // re-throw so UI can handle loading state
  }
}

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------
export default function UserProfileCard() {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    email: "",
    role: "",
    status: "",
  });

  const [editing, setEditing] = useState<keyof UserProfile | null>(null);
  const [temp, setTemp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // -------------------------------------------------------------
  // Load profile from JWT in cookie
  // -------------------------------------------------------------
  useEffect(() => {
    const token = Cookies.get("accessToken");

    if (!token) {
      console.warn("No access token found");
      return;
    }

    try {
      const decoded = jwtDecode<JwtPayload>(token);

      // Optional: Check expiration
      if (decoded.exp && Date.now() >= decoded.exp * 1000) {
        console.warn("Token expired");
        Cookies.remove("accessToken");
        return;
      }

      setProfile({
        name: decoded.name || "Unknown",
        email: decoded.email || "N/A",
        role: decoded.role || "user",
        status: decoded.status || "active",
      });
    } catch (err) {
      console.error("Invalid token:", err);
      Cookies.remove("accessToken");
    }
  }, []);

  // -------------------------------------------------------------
  // Start editing (only name/email)
  // -------------------------------------------------------------
  const startEdit = (field: "name" | "email") => {
    setEditing(field);
    setTemp(profile[field]);
    setError(null);
  };

  // -------------------------------------------------------------
  // Cancel
  // -------------------------------------------------------------
  const cancelEdit = () => {
    setEditing(null);
    setTemp("");
  };

  // -------------------------------------------------------------
  // Save
  // -------------------------------------------------------------
  const saveEdit = async () => {
    if (!editing || editing === "role" || editing === "status") return;

    setLoading(true);
    setError(null);

    try {
      const updates: Partial<UserProfile> = { [editing]: temp };

      const newProfile = { ...profile, [editing]: temp };
      setProfile(newProfile);
      await updateUserProfile(newProfile);

      // Update cookie (optional – if you want to persist)
      Cookies.set(editing, temp, { expires: 30, sameSite: "strict" });

      cancelEdit();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // -------------------------------------------------------------
  // Render field (with editable flag)
  // -------------------------------------------------------------
  const renderField = (
    label: string,
    field: keyof UserProfile,
    value: string,
    editable: boolean
  ) => (
    <div className="flex items-center justify-between py-2">
      <div className="flex-1">
        <span className="text-sm font-medium text-gray-600">{label}:</span>{" "}
        {editing === field ? (
          <Input
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            className="mt-1 w-full"
            disabled={loading}
            type={field === "email" ? "email" : "text"}
          />
        ) : (
          <span className="ml-2 text-gray-900 font-medium">{value}</span>
        )}
      </div>

      {/* Edit / Save / Cancel */}
      {editing === field ? (
        <div className="flex gap-1 ml-2">
          <Button size="sm" onClick={saveEdit} disabled={loading}>
            <Check size={16} />
          </Button>
          <Button size="sm" variant="ghost" onClick={cancelEdit} disabled={loading}>
            <X size={16} />
          </Button>
        </div>
      ) : (
        editable && (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => startEdit(field as "name" | "email")}
            className="ml-2"
          >
            <Pencil size={16} />
          </Button>
        )
      )}
    </div>
  );

  // -------------------------------------------------------------
  // Render
  // -------------------------------------------------------------
  return (
    <Card className="max-w-md mx-auto mt-10 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">My Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded text-sm">
            {error}
          </div>
        )}

        {renderField("Name", "name", profile.name, true)}
        {renderField("Email", "email", profile.email, true)}
        {renderField("Role", "role", profile.role, false)}
        {renderField("Status", "status", profile.status, false)}
      </CardContent>
    </Card>
  );
}