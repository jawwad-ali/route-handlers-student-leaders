"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"

const UserForm = () => {
    // using the useRouter hook to display the data on the UI
    const router = useRouter()

    // State to save the name
    const [fullname, setFullName] = useState("")

    // function to send user input to the backend
    const handleSubmit = async (e: React.FormEvent) => {
        // preventing the page reload
        e.preventDefault();

        try {
            const response = await fetch('/api/hello', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // sending the fullname to the backend API entered by the USER
                body: JSON.stringify({ fullname }), // Send the input data as JSON
            });

            await response.json();
            // window.location.reload() // reloading the page from vanilla JS

            router.refresh() // using the useRouter hook to display the data on the UI

        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div>
            {/* onsubmit event handler */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="border border-gray-700 rounded-lg px-5 py-2"
                    placeholder="Enter your fullname"

                    value={fullname} // state variable. connecting the value to the component state
                    
                    onChange={(e) => setFullName(e.target.value)} // e.target.value to grab the latest value after every letter updates.
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm