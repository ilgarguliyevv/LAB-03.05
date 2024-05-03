import React, { useState } from 'react'
function App() {
    const [formData, setFormData] = useState({
        input1: '',
        input2: '',
        input3: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="input1"
                    value={formData.input1}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="input2"
                    value={formData.input2}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="input3"
                    value={formData.input3}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Göndər</button>
        </form>
    );
}

export default App;
