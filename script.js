// "Secure" "SameSite=None";

if (navigator.userAgentData) {
    const userAgentData = navigator.userAgentData;
    const browserName = userAgentData.brands[0].brand;
    const browserVersion = userAgentData.brands[0].version;
    const platform = userAgentData.platform;

    // Use the retrieved information as needed
    console.log(`Browser: ${browserName} ${browserVersion}`);
    console.log(`Platform: ${platform}`);
} else {
    // Fallback for browsers that don't support navigator.userAgentDatau
    // Use feature detection or other techniques
}





const userEmail = document.querySelector("#user-email");
const userPassword = document.querySelector("#user-password");
const form = document.querySelector("#auth-form");
const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

const secretContent = document.querySelector("#user-message");


form.addEventListener("submit", function (e) {
    e.preventDefault();
});

secretContent.style.display = "none"


const userSignUp = async() =>{
    
    const userSignUpEmail = userEmail.value
    const userSignUpPassword = userPassword.value

    createUserWithEmailAndPassword(auth,userSignUpEmail, userSignUpPassword)
    .then((userCredential)=>{
        const user = userCredential.user
        console.log(user)
    })



}
