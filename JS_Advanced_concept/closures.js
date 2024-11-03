// closures
function z() {
    const b = 900;

    function x() {
        let a = 25;

        function y() {
            console.log(a, b);
        }

        a = 100;

        y();
    }

    x();
}

z();
