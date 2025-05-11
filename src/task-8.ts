enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
  }

function getPermissions(role: Role): string[] {
    return role === Role.Admin ? ["create", "read", "update", "delete"] : role === Role.User ? ["read", "update"] : role === Role.Guest ? ["read"] : [];
}


console.log(getPermissions(Role.Admin))