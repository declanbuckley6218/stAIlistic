import './../../app/globals.css';
import Link from 'next/link';

interface stailistics {
    isButton : boolean
};
export default function StailisticLogo({isButton}: stailistics) {
    

    return(
        (isButton) ? 
        <LinkToHome>
            <StailisticText/>

        </LinkToHome>
        : <StailisticText/>
    );
    

}
function StailisticText(){
    return(
        <div>
            <span>
                <text className="stailistic-st">ST</text>
                <text className="stailistic-ai">AI</text>
                <text className="stailistic-listic">LISTIC</text>
            </span>
        </div>
    );
}
function LinkToHome(children){
    return(
        <div>
            <Link href='/'>
             {children}
            </Link>
        </div>
                  
    );
}