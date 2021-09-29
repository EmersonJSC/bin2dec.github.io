import react, { useState } from 'react'
import './../Styles/Index.css'

const Index = () =>{

    // useState
    const [statebin, setStatebin] = useState(0);
    const errorbin = (bin) =>{
        //console.log(bin.split(""));
        var num = bin.split("");
        //console.log(num.length);
        for(var i=0; i < num.length; i++){
            if(num[i] != 0 && num[i] != 1){
                //console.log("Nao e binario");
                document.querySelector('.bin').classList.add('is-danger'); 
                document.querySelector('.error').classList.remove('is-hidden');
                break; 
            }else{
                document.querySelector('.bin').classList.remove('is-danger'); 
                document.querySelector('.error').classList.add('is-hidden'); 
                
                console.log (parseInt(bin, 2));
                setStatebin(parseInt(bin, 2));
            }
        }

    }

    return(
        <nav className="hero is-fullheight">
            <div className="hero-body robotofont">
                <div  className="container has-text-centered">
                    {/* Title */}
                    <h1 className="is-size-2 has-text-weight-bold textAliceBlue robotofont">Bin2Dec</h1>
                    {/* Corpo */}
                    <div className="container navpagemain" style={{width: '70vh'}}>
                        <h6 className="textAliceBlue pt-4 is-size-7 ">Esse e um programa de estudos para conversor binario.</h6>
                        
                       <div className="field mt-6 center" style={{width:'70%'}}>
                           <div className="label">
                               <div className="control mt-6">
                                    <input className="bin input is-large mt-6 is-rounded has-text-centered" type="text" placeholder="001011001" onChange={e => errorbin(e.target.value)} ></input>
                               </div>
                               <p className="help mt-3">Digite um Numero binario para conversão para decimal</p>
                               <p className="error help mt-3 has-text-danger is-size-6 is-hidden">Voce digitou um numero não binario</p>
                           </div>
                       </div>

                       <div>
                           <h1 className="is-size-2 mt-6 textAliceBlue">Resultado</h1>
                           <h3 className="is-size-1 mt-4 has-text-weight-bold ">{statebin}</h3>
                       </div>
                      
                    </div>
                    <div className="container mt-4">
                        <div className="heart center"/>
                        <h6 className="textAliceBlue mt-2">Desenvolvido por Emerson Costa</h6>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Index;