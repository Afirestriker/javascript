const passwordField = $("#password-field");
const strengthElement = $("#password-strength");
const progressBar = strengthElement.find(".progress-bar");
const strengthText = strengthElement.find(".strength-text");
const strengthColor = ["red", "red", "yellow", "orange", "lightgreen"];

passwordField.on("input", checkPasswordStrength);

function checkPasswordStrength() {
    const password = passwordField.val();
    const result = zxcvbn(password);

    if (!password.length) result.score = -1;

    $(".progress-bar .section").prop("style", "");

    for (let i = 0; i <= result.score; i++) {
        progressBar.find(`.section-${i}`)[0]
            .style = `background-color: ${strengthColor[result.score]}`;
    }

    // Update strength text
    const text =
            result.score == -1
            ? ""
            : result.score == 4
            ? "Strong!"
            : result.score == 3
            ? "Medium!"
            : result.score == 2
            ? "Lose!"
            : "Weak!";

    strengthText.text(text);
}
