import React, {useState} from 'react';

export const Contact = () => {
    const [form, setForm] = useState({
        name: '', email: '', message: '',
    });
    const [require, setRequire] = useState(false);
    const [invalid, setInvalid] = useState(null);
    const [summary, setSummary] = useState(null);
    const [loading, setLoading] = useState(false);

    const sendForm = async (e) => {
        e.preventDefault();

        if (!(!form.name || !form.email || !form.message)) {
            if (!form.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
                setInvalid('Invalid email');
            } else {
                setLoading(true);
                const res = await fetch("https://getform.io/f/f5729be5-83d4-4c44-b1a8-e837fb2e1286", {
                    method: 'POST', headers: {
                        'Content-Type': 'application/json',
                    }, body: JSON.stringify({
                        ...form,
                    }),
                });

                if (res.ok) {
                    setLoading(false);
                    setSummary('Thank you for your message');
                }
            }
        } else {
            setRequire(true);
        }
    };

    return (
        <div name="contact" className="w-full h-screen bg-[#0d0d0d] flex justify-center items-center text-center p-4">
            <form onSubmit={sendForm}
                  className="flex flex-col max-w-[600px] w-full">
                <p className="my-3 text-3xl sm:text-7xl font-bold text-[#327361]">Contact</p>
                <input
                    className={!form.name && require ? 'border-[3px] border-amber-500 placeholder-amber-500 p-2' : 'border-[3px] p-2 bg-[white]'}
                    type="text" placeholder={(!form.name && require) ? "Please complete the field" : "Name"}
                    name="name" value={form.name}
                    onChange={e => setForm(form => ({
                        ...form, name: e.target.value,
                    }))}
                    disabled={summary}
                />
                <input
                    className={!form.email && require ? 'border-[3px] border-amber-500 placeholder-amber-500 my-3 p-2' :
                        invalid ? 'border-[3px] border-amber-500 placeholder-amber-500 my-3 text-amber-500 p-2 ' : 'input-email border-[3px] my-3 p-2 bg-[white] fill-amber-200'}
                    type="email"
                    placeholder={(!form.email && require) ? "Please complete the field" : "Email"}
                    onFocus={() => setInvalid(null)}
                    name="email" value={invalid ?? form.email}
                    onChange={e => setForm(form => ({
                        ...form, email: e.target.value,
                    }))}
                    disabled={summary}
                />
                <textarea
                    className={!form.message && require ? 'border-[3px] border-amber-500 placeholder-amber-500 p-2' : 'box-border border-[3px] p-2 bg-[white]'}
                    rows="10" placeholder={(!form.message && require) ? "Please complete the field" : "Message"}
                    name="message"
                    value={form.message}
                    onChange={e => setForm(form => ({
                        ...form, message: e.target.value,
                    }))}
                    disabled={summary}
                ></textarea>
                <button onClick={sendForm}
                        className={!summary && !loading ? "text-white group border-2 px-6 py-2 my-4 mx-auto flex hover:bg-[#327361] hover:border-[#327361] duration-300" : "text-white group border-2 px-6 py-2 my-4 mx-auto flex bg-[#327361] border-[#327361] duration-300"}
                        disabled={summary || loading}
                >
                    {loading ? "Sending" : summary ? summary : "Send message"}
                </button>
            </form>
        </div>);
};