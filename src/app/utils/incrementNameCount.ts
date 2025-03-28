const incrementNameCount = async (name: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/count/${name}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    if (!res.ok) {
        throw new Error('Failed to increment count');
    }
    
    const { data } = await res.json();
    return data;
}

export default incrementNameCount;