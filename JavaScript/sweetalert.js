(async () =>{
    const {value: tipoDeCabello} = await Swal.fire({
        title: 'Bienvenido!',
        text: 'Selecciona tu tipo de cabello',
        icon: 'question',
        confirmButtonText: 'Seleccionar',
        footer: 'Completa este breve cuestionario',
        timer: 15000,
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        input: 'select',
        inputPlaceholder: 'Tipo de cabello',
        inputOptions: {
            Seco: 'Seco',
            Graso: 'Graso',
            Mixto: 'Mixto'
        }
    })
    if(tipoDeCabello){
        Swal.fire({
            title: `Seleccionaste cabello ${tipoDeCabello}`
        })
    }
})()

