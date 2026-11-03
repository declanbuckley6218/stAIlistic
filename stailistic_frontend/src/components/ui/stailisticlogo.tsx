import './../../app/globals.css';
import Link from 'next/link';

interface stailistics {
    isButton : boolean
};
export default function StailisticLogo({isButton}: stailistics) {
    

    return(
        (isButton) ? 
        <Link href='/'>
            <StailisticText/>
        </Link>
        : <StailisticText/>
    );
    

}
function StailisticText(){
    return(
        <div>
            <span className="flex flex-row select-none">
                <p className="stailistic-st">ST</p>
                <p className="stailistic-ai">AI</p>
                <p className="stailistic-listic">LISTIC</p>
            </span>
        </div>
    );
}
