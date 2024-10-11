function Nota(props){
    let resultado = props.nota

    if(resultado >= 90){
        return <h1>A sua nota é {resultado}, Excelente!</h1>
    }else if(resultado <= 89 && resultado > 70){
        return <h1>A sua nota é {resultado}, é uma boa nota.</h1>
    }else if(resultado <= 70){
        return <h1>A sua nota é {resultado}, precisa melhorar...</h1>
    }
}

export default Nota