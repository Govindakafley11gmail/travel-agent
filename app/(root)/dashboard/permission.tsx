// hooks/usePermissions.ts
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface PermissionPayload extends JwtPayload {
  permissionsList?: string[] | string;
}

export const usePermissions = () => {
  const [permissions, setPermissions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("accessToken");

    if (!token) {
      setPermissions([]);
      setIsLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode<PermissionPayload>(token);
      const perms = decoded.permissionsList
        ? Array.isArray(decoded.permissionsList)
          ? decoded.permissionsList
          : decoded.permissionsList.split(",").map(p => p.trim())
        : [];

      setPermissions(perms);
    } catch (error) {
      console.error("Invalid token or permission parsing failed", error);
      setPermissions([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const hasPermission = (permission: string): boolean => {
    return permissions.includes(permission);
  };

  const hasAnyPermission = (perms: string[]): boolean => {
    return perms.some(p => permissions.includes(p));
  };

  const hasAllPermissions = (perms: string[]): boolean => {
    return perms.every(p => permissions.includes(p));
  };

  return {
    permissions,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    isLoading,
  };
};