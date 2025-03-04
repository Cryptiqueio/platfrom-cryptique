const admin = require("../config/firebaseAdmin");

// Import testing library (Jest)
const { describe, it, expect } = require('@jest/globals');

describe("Firebase Authentication Tests", () => {
  
  it("should list all users", async () => {
    const listUsersResult = await admin.auth().listUsers(10);
    expect(Array.isArray(listUsersResult.users)).toBe(true);
    console.log("Users:", listUsersResult.users);
  });

  it("should create a test user", async () => {
    const testEmail = "testuser@example.com";

    // Create the user
    const user = await admin.auth().createUser({
      email: testEmail,
      emailVerified: false,
      password: "Test1234!",
      displayName: "Test User",
      disabled: false,
    });

    expect(user.email).toBe(testEmail);
    console.log("Test user created:", user.uid);

    // Cleanup: Delete the test user
    await admin.auth().deleteUser(user.uid);
    console.log(`Test user (${user.uid}) deleted successfully.`);
  });

});
