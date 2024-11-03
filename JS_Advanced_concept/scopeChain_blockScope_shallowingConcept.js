{
    var a = 10;
    let b = 20;
    const c = 30;

    {
        var a = 100; // shallowing of var
        let b = 200; // shallowing not possible with let & const due to block scoping
        const c = 300;
        console.log(a, b, c);
    }

    console.log(a, b, c);
}
