<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Load URL In Iframe</title>
        <style>
            #iframe-container {
                width: 600px;
                height: 300px;
                border: 1px solid #ddd;
                margin: 10px auto;
            }

            #viewCountervalue {
                width: max-content;
                background-color: black;
                color: lightgreen;
                padding: 5px 15px;
                letter-spacing: 8px;
                font-size: 1.5rem;
            }

            button, input {
                padding: 5px;
                margin: 5px 2px;
            }
        </style>
    </head>
    <body>
        <h1>Load Given URL in iframe and reload at every given second</h1>

        <h2 id="viewCountervalue">0000XYZ</h2>

        URL: <input type="text" name="url" id="url" placeholder="Enter URL" />
        Reload Time: <input type="number" name="reloadTime" id="reloadTime" placeholder="Enter Interval (in MilliSec)" min="1000" /> <br />
        Start Value: <input type="number" name="startValue" id="startValue" placeholder="Enter Start Value" />
        Target Value: <input type="number" name="targetValue" id="targetValue" placeholder="Enter Target Value" />

        <br/>
        <button id="startCounter" onclick="startCounter()">🚆Start Counter</button>
        <button id="pauseCounter" onclick="pauseCounter()" disabled="disabled">⏸️ Pause Counter</button>
        <button id="stopCounter" onclick="stopCounter()" disabled="disabled">🛑 Stop Counter</button>
        <button id="resetCounter" onclick="resetCounter()" disabled="disabled">🚉 Reset</button>

        <h3 id="message">Click Start Counter!</h3>

        <div id="iframe-container">
            <iframe id="my-iframe" src="" frameborder="0"></iframe>
        </div>

        <script>
            let url = "";
            let setIntervalTimeout = 1000;
            let startValue = 0;
            let targetValue = 0;

            const array1 = [0, 0, 0, 0, 0, 0, 0];
            const arrLength = array1.length;
            let array2 = [...array1];
            let counter = 0;
            let incrementedValue = "0";
            let intervalId = null;

            function validateInputField() {
                // URL: field
                url = document.getElementById('url').value;

                if (url.length <= 0) {
                    document.getElementById("message").style.color = "red";
                    document.getElementById("message").innerHTML = "Enter URL";
                    return false;
                }

                // Reload Time: field
                setIntervalTimeout = (document.getElementById('reloadTime').value.length > 0) ? parseInt(setIntervalTimeout) : setIntervalTimeout;
                document.getElementById('reloadTime').value = setIntervalTimeout;
                document.getElementById('reloadTime').setAttribute('value', setIntervalTimeout);

                // Start Value: field
                startValue = document.getElementById('startValue').value;
                startValue = (startValue.toString().length > 0) ? parseInt(startValue) : 0;

                if (startValue.toString().length <=0 || startValue <= 0) {
                    document.getElementById("message").style.color = "red";
                    document.getElementById("message").innerHTML = "Enter Start Value";
                    return false;
                }

                // Target Value: field
                targetValue = document.getElementById('targetValue').value;
                targetvalue = (targetValue.toString().length > 0) ? parseInt(targetValue) : 0;

                return true;
            }

            function startCounter() {
                if (!validateInputField()) return;

                toggleElement(true, 1);

                counter = (counter > startValue) ? counter : startValue;

                intervalId = setInterval(() => {
                    if (targetValue > 0 && parseInt(incrementedValue) >= targetValue) {
                        stopCounter(true);
                        return;
                    }

                    document.getElementById("message").style.color = "green";
                    document.getElementById("message").innerHTML = "Counter Start!";
                    document.getElementById("my-iframe").src = url;

                    ++counter;
                    const strLength = counter.toString().length;
                    array2 = [...array1];
                    array2.splice(-strLength, arrLength - strLength, counter);
                    incrementedValue = array2.toString().replaceAll(",", "");

                    document.getElementById("viewCountervalue").innerHTML = incrementedValue;
                }, setIntervalTimeout);
            }

            function pauseCounter() {
                toggleElement(true, 2);
                document.getElementById("message").style.color = "blue";
                document.getElementById("message").innerHTML = "Counter Paused!";
                clearInterval(intervalId);
            }

            function stopCounter(isAutoStop = false) {
                toggleElement(false, 3);
                document.getElementById("message").style.color = "red";

                if (!isAutoStop)
                    document.getElementById("message").innerHTML = "Counter Stop!";
                else
                    document.getElementById("message").innerHTML = "Target value matched. Counter Auto Stoped!";

                clearInterval(intervalId);
            }

            function toggleElement(booleanValue = false, flag = 0) {
                if (booleanValue) {
                    document.getElementById('url').setAttribute('disabled', true);
                    document.getElementById('reloadTime').setAttribute('disabled', true);
                    document.getElementById('startValue').setAttribute('disabled', true);
                    document.getElementById('targetValue').setAttribute('disabled', true);
                } else {
                    document.getElementById('reloadTime').removeAttribute('disabled');
                    document.getElementById('url').removeAttribute('disabled');
                    document.getElementById('startValue').removeAttribute('disabled');
                    document.getElementById('targetValue').removeAttribute('disabled');
                }

                if (flag === 1) { // counter started
                    document.getElementById('startCounter').setAttribute('disabled', true);
                    document.getElementById('pauseCounter').removeAttribute('disabled');
                    document.getElementById('stopCounter').removeAttribute('disabled');
                    document.getElementById('resetCounter').removeAttribute('disabled');
                }
                else if (flag === 2) { // counter paused
                    document.getElementById('pauseCounter').setAttribute('disabled', true);
                    document.getElementById('startCounter').removeAttribute('disabled');
                    document.getElementById('stopCounter').removeAttribute('disabled');
                }
                else if (flag === 3) { // counter stoped
                    document.getElementById('stopCounter').setAttribute('disabled', true);
                    document.getElementById('pauseCounter').setAttribute('disabled', true);
                    document.getElementById('startCounter').removeAttribute('disabled');
                }
            }

            function resetCounter() {
                window.location.reload();
            }
        </script>
    </body>
</html>
