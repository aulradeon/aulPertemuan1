interface LabelInputProps {
    name: string;
    type: string;
    placeholder: string
}

const phInp = {
    name: "John Doe",
    email: "emai@example.com",
    phonenum: "+629237492837",
    company: "PT. Mencari Neon Sejati"
}

function LabelInput({ name, type, placeholder }: LabelInputProps) {
    return (
        <div className="">
            <label className="block mb-2 font-medium" htmlFor={name} >{`${name.charAt(0).toUpperCase() + name.slice(1)}`}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                className="w-full px-3 py-2 border border-fuchsia-200 border-2 rounded-md" />
        </div>
    )
}


function Contacts() {
    return (
        <div className="container w-2xl p-5 mx-auto">
            <div className="bg-purple-50 rounded-lg p-5">
                <form action="GET">
                    <div className="grid grid-cols-2 gap-6">
                        <LabelInput name="name" type="text" placeholder={phInp.name} />
                        <LabelInput name="email" type="text" placeholder={phInp.email} />
                        <LabelInput name="company" type="text" placeholder={phInp.company} />
                        <LabelInput name="phone" type="text" placeholder={phInp.phonenum} />

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                Subject
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                className="w-full px-3 py-2 border border-fuchsia-200 border-2 rounded-md">
                                <option value="">Select a subject</option>
                                <option value="general">General Inquiry</option>
                                <option value="support">Technical Support</option>
                                <option value="partnership">Partnership</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full px-3 py-2 border border-fuchsia-200 border-2 rounded-md resize-none"
                                placeholder="Tell us about your project or inquiry..."
                            ></textarea>
                        </div>

                        <div>
                            <button>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
