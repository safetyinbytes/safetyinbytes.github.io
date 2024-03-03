import Turnstile from "react-turnstile";
import {useState} from "react";
import {Axios} from "axios";
import Swal from "sweetalert2";

export const CallForParticipation = () => {
    const [turnstileToken, setTurnstileToken] = useState<string | undefined>(undefined)

    const [name, setName] = useState('');
    const [topic, setTopic] = useState('');
    const [content, setContent] = useState('');
    const [abstract, setAbstract] = useState('');
    const [exercise, setExercise] = useState('');
    const [email, setEmail] = useState('');

    const isFormValid = () =>
        turnstileToken !== undefined &&
        name.trim() !== '' &&
        topic.trim() !== '' &&
        content.trim() !== '' &&
        abstract.trim() !== '' &&
        exercise.trim() !== '' &&
        email.trim() !== ''

    const submit = async () => {
        const message = `Name:\n${name}\n\nTopic:\n${topic}\n\nAbstract:\n${abstract}\n\nContent:\n${content}\n\nExercise:\n${exercise}\n\nEmail:\n${email}`;
        const requestBody = {
            captcha: turnstileToken,
            emailAddress: email,
            name: 'Safety in Bytes',
            message
        }
        const response =
            await new Axios({headers: {"Content-Type": "application/json"}}).post('https://backend.jonas-thelemann.de/api/contact', JSON.stringify(requestBody));
        if(response.status === 200) {
            await Swal.fire({
                title: "Formular gesendet!",
                icon: "success"
            });
            setName('');
            setTopic('');
            setAbstract('');
            setExercise('');
            setEmail('');
        } else {
            await Swal.fire({
                title: "Fehler!",
                text: "Das Formular konnte nicht gesendet werden, versuchen Sie es später erneut.",
                icon: "error"
            });
        }
    }

    return (
        <div className="flex justify-center">
            <div className="my-8 w-1/2 flex flex-col gap-10 justify-center">
                <p className="text-center text-5xl">Call For Participation</p>
                <div className="flex flex-col gap-2">
                    <p className="text-xl">Ihr Name</p>
                    <input value={name} onChange={(e) => setName(e.target.value)}
                           className="p-2 border-black border-2 w-full rounded-md"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl">Titel Ihres Workshops</p>
                    <input value={topic} onChange={(e) => setTopic(e.target.value)}
                           className="p-2 border-black border-2 w-full rounded-md"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl">Abstract</p>
                    <textarea value={abstract} onChange={(e) => setAbstract(e.target.value)}
                              className="p-2 border-black border-2 w-full rounded-md resize-none h-48"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl">Ausformulierung</p>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}
                              className="p-2 border-black border-2 w-full rounded-md resize-none h-48"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl">Idee für eine kurze, praktische Übung</p>
                    <textarea value={exercise} onChange={(e) => setExercise(e.target.value)}
                           className="p-2 border-black border-2 w-full rounded-md resize-none h-48"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl">E-Mail-Adresse</p>
                    <input value={email} onChange={(e) => setEmail((e.target.value))}
                           className="p-2 border-black border-2 w-full rounded-md"/>
                </div>
                <div className="flex justify-center">
                    <Turnstile sitekey="0x4AAAAAAAQiMSbON1vdesv0" theme="light" onVerify={(token, _) => setTurnstileToken(token)}/>
                </div>
                <div className="flex justify-center">
                    <button disabled={!isFormValid()} onClick={submit}
                            className="py-2 px-4 bg-black text-white font-bold rounded-md disabled:bg-gray-200">
                        Senden
                    </button>
                </div>
            </div>
        </div>
    )
}