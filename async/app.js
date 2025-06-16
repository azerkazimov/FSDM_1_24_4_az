// In-memory storage for users
let users = [];
let userId = 1;

// Simulate database operations with delays
function simulateAsyncOperation(delay = 1000) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

// CALLBACK HELL APPROACH
// Simulated async functions using callbacks
function validateEmail(email, callback) {
  console.log("Validating email...");
  setTimeout(() => {
    const isValid = email.includes("@") && email.includes(".");
    if (isValid) {
      callback(null, true);
    } else {
      callback(new Error("Invalid email format"), null);
    }
  }, 500);
}

function checkUserExists(email, callback) {
  console.log("Checking if user exists...");
  setTimeout(() => {
    const exists = users.some((user) => user.email === email);
    callback(null, exists);
  }, 700);
}

function saveUserToDatabase(userData, callback) {
  console.log("Saving user to database...");
  setTimeout(() => {
    try {
      const newUser = {
        id: userId++,
        ...userData,
        createdAt: new Date().toISOString(),
      };
      users.push(newUser);
      callback(null, newUser);
    } catch (error) {
      callback(error, null);
    }
  }, 800);
}

function sendWelcomeEmail(user, callback) {
  console.log("Sending welcome email...");
  setTimeout(() => {
    // Simulate email sending
    callback(null, `Welcome email sent to ${user.email}`);
  }, 600);
}

function logUserActivity(user, callback) {
  console.log("Logging user activity...");
  setTimeout(() => {
    callback(null, `Activity logged for user ${user.id}`);
  }, 400);
}

// THE DREADED CALLBACK HELL
function createUserWithCallbacks() {
  const output = document.getElementById("callbackOutput");
  output.innerHTML =
    '<div class="loading"></div>Starting callback hell process...';

  const userData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    age: parseInt(document.getElementById("age").value),
  };

  let logs = "Starting callback hell process...\n";

  // THE PYRAMID OF DOOM BEGINS...
  validateEmail(userData.email, (err, isValid) => {
    if (err) {
      logs += `❌ Email validation failed: ${err.message}\n`;
      output.textContent = logs;
      return;
    }
    logs += "✅ Email validation passed\n";
    output.textContent = logs;

    checkUserExists(userData.email, (err, exists) => {
      if (err) {
        logs += `❌ User existence check failed: ${err.message}\n`;
        output.textContent = logs;
        return;
      }
      if (exists) {
        logs += "❌ User already exists\n";
        output.textContent = logs;
        return;
      }
      logs += "✅ User does not exist, proceeding...\n";
      output.textContent = logs;

      saveUserToDatabase(userData, (err, savedUser) => {
        if (err) {
          logs += `❌ Failed to save user: ${err.message}\n`;
          output.textContent = logs;
          return;
        }
        logs += `✅ User saved with ID: ${savedUser.id}\n`;
        output.textContent = logs;

        sendWelcomeEmail(savedUser, (err, emailResult) => {
          if (err) {
            logs += `❌ Failed to send welcome email: ${err.message}\n`;
            output.textContent = logs;
            return;
          }
          logs += `✅ ${emailResult}\n`;
          output.textContent = logs;

          logUserActivity(savedUser, (err, logResult) => {
            if (err) {
              logs += `❌ Failed to log activity: ${err.message}\n`;
              output.textContent = logs;
              return;
            }
            logs += `✅ ${logResult}\n`;
            logs += `🎉 CALLBACK HELL COMPLETE! User ${savedUser.firstName} ${savedUser.lastName} created successfully!\n`;
            logs +=
              "\n--- Notice the nested structure and error handling complexity ---";
            output.textContent = logs;
            updateUserList();
            resetForm();
          }); // 5th level of nesting!
        }); // 4th level of nesting!
      }); // 3rd level of nesting!
    }); // 2nd level of nesting!
  }); // 1st level of nesting!
  // Welcome to callback hell! 🔥
}

// PROMISE-BASED APPROACH
// Convert callback functions to promises
function validateEmailPromise(email) {
  return new Promise((resolve, reject) => {
    console.log("Validating email...");
    setTimeout(() => {
      const isValid = email.includes("@") && email.includes(".");
      if (isValid) {
        resolve(true);
      } else {
        reject(new Error("Invalid email format"));
      }
    }, 500);
  });
}

function checkUserExistsPromise(email) {
  return new Promise((resolve, reject) => {
    console.log("Checking if user exists...");
    setTimeout(() => {
      const exists = users.some((user) => user.email === email);
      resolve(exists);
    }, 700);
  });
}

function saveUserToDatabasePromise(userData) {
  return new Promise((resolve, reject) => {
    console.log("Saving user to database...");
    setTimeout(() => {
      try {
        const newUser = {
          id: userId++,
          ...userData,
          createdAt: new Date().toISOString(),
        };
        users.push(newUser);
        resolve(newUser);
      } catch (error) {
        reject(error);
      }
    }, 800);
  });
}

function sendWelcomeEmailPromise(user) {
  return new Promise((resolve, reject) => {
    console.log("Sending welcome email...");
    setTimeout(() => {
      resolve(`Welcome email sent to ${user.email}`);
    }, 600);
  });
}

function logUserActivityPromise(user) {
  return new Promise((resolve, reject) => {
    console.log("Logging user activity...");
    setTimeout(() => {
      resolve(`Activity logged for user ${user.id}`);
    }, 400);
  });
}

// CLEAN PROMISE CHAIN
async function createUserWithPromises() {
  const output = document.getElementById("promiseOutput");
  output.innerHTML =
    '<div class="loading"></div>Starting promise-based process...';

  const userData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    age: parseInt(document.getElementById("age").value),
  };

  let logs = "Starting promise-based process...\n";

  try {
    // Clean, linear flow with async/await
    logs += "🔄 Validating email...\n";
    output.textContent = logs;
    await validateEmailPromise(userData.email);
    logs += "✅ Email validation passed\n";
    output.textContent = logs;

    logs += "🔄 Checking if user exists...\n";
    output.textContent = logs;
    const userExists = await checkUserExistsPromise(userData.email);
    if (userExists) {
      throw new Error("User already exists");
    }
    logs += "✅ User does not exist, proceeding...\n";
    output.textContent = logs;

    logs += "🔄 Saving user to database...\n";
    output.textContent = logs;
    const savedUser = await saveUserToDatabasePromise(userData);
    logs += `✅ User saved with ID: ${savedUser.id}\n`;
    output.textContent = logs;

    logs += "🔄 Sending welcome email...\n";
    output.textContent = logs;
    const emailResult = await sendWelcomeEmailPromise(savedUser);
    logs += `✅ ${emailResult}\n`;
    output.textContent = logs;

    logs += "🔄 Logging user activity...\n";
    output.textContent = logs;
    const logResult = await logUserActivityPromise(savedUser);
    logs += `✅ ${logResult}\n`;
    output.textContent = logs;

    logs += `🎉 PROMISE SUCCESS! User ${savedUser.firstName} ${savedUser.lastName} created successfully!\n`;
    logs +=
      "\n--- Notice the clean, readable structure and centralized error handling ---";
    output.textContent = logs;

    updateUserList();
    resetForm();
  } catch (error) {
    logs += `❌ Promise chain failed: ${error.message}\n`;
    logs += "--- Single catch block handles all errors! ---";
    output.textContent = logs;
  }
}

function updateUserList() {
  const userList = document.getElementById("userList");
  if (users.length === 0) {
    userList.innerHTML = "";
    return;
  }

  userList.innerHTML =
    "<h3>Created Users:</h3>" +
    users
      .map(
        (user) => `
                <div class="user-card">
                    <h4>${user.firstName} ${user.lastName}</h4>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Age:</strong> ${user.age}</p>
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Created:</strong> ${new Date(
                      user.createdAt
                    ).toLocaleString()}</p>
                </div>
            `
      )
      .join("");
}

function resetForm() {
  document.getElementById("userForm").reset();
}

// Initialize with sample data
document.getElementById("firstName").value = "John";
document.getElementById("lastName").value = "Doe";
document.getElementById("email").value = "john.doe@example.com";
document.getElementById("age").value = "25";
