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
            setContent('');
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
                <div className="flex justify-center">
                    <p className="text-center font-bold text-5xl leading-relaxed sm:leading-none">Call For <span
                        className="p-2 text-white rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">Participation</span>
                    </p>
                </div>
                <div className="flex gap-4 mt-5">
                    <div className="flex flex-col gap-2 w-1/2">
                        <p className="text-xl font-bold">Ihr Name</p>
                        <input value={name} onChange={(e) => setName(e.target.value)}
                               className="p-2 border-black border-2 w-full rounded-md bg-transparent"/>
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <p className="text-xl font-bold">E-Mail-Adresse</p>
                        <input value={email} onChange={(e) => setEmail((e.target.value))}
                               className="p-2 border-black border-2 w-full rounded-md bg-transparent"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold">Titel Ihres Workshops</p>
                    <input value={topic} onChange={(e) => setTopic(e.target.value)}
                           className="p-2 border-black border-2 w-full rounded-md bg-transparent"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold">Abstract</p>
                    <textarea value={abstract} onChange={(e) => setAbstract(e.target.value)}
                              className="p-2 border-black border-2 w-full rounded-md resize-none h-48 bg-transparent"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold">Ausformulierung</p>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}
                              className="p-2 border-black border-2 w-full rounded-md resize-none h-48 bg-transparent"/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold">Idee für eine kurze, praktische Übung</p>
                    <textarea value={exercise} onChange={(e) => setExercise(e.target.value)}
                              className="p-2 border-black border-2 w-full rounded-md resize-none h-48 bg-transparent"/>
                </div>
                <div className="flex justify-center">
                    <Turnstile sitekey="0x4AAAAAAAQiMSbON1vdesv0" theme="light"
                               onVerify={(token, _) => setTurnstileToken(token)}/>
                </div>
                <div className="flex justify-center">
                    <button disabled={false} onClick={submit}
                            className="py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl rounded-md disabled:bg-gray-200">
                        Senden
                    </button>
                </div>
            </div>
        </div>
    )
}