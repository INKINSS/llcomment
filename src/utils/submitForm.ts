const submitForm = async (data:Object) => {
    try {
        const response = await fetch('mongodb://llcomment:llcomment123@localhost:8000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if(!response.ok) {
            throw new Error('Failed to submit form');
        }
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export { submitForm }