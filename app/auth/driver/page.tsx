import { Overlay } from "@/components/shared/overlay"
import "./style.scss"
export default function Driver() {
    return (

        <Overlay className="driver justify-center items-center">

            <form
                // onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h2>

                <div className="mb-4">
                    <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        // value={formData.firstName}
                        // onChange={handleChange}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        // value={formData.lastName}
                        // onChange={handleChange}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        // value={formData.email}
                        // onChange={handleChange}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </Overlay>


    )
}