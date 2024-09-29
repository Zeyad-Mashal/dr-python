const URL = "https://back.dr-python.center/watchTracking/tracking";
const USER_TOKEN = localStorage.getItem("USER_TOKEN")
const LectureCounterAPI = async (data, setError, setViewsLoading, setModel) => {
    setViewsLoading(true)
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `drpz0${USER_TOKEN}`
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            setViewsLoading(false)
            setModel(true);
        } else {
            document.querySelector(".error_popup").style.display = "flex";
            if (response.status == 403) {
                setError(result.message);
                setViewsLoading(false)
            } else if (response.status == 404) {
                setError(response.message);
                setViewsLoading(false)
            } else if (response.status == 400) {
                setError(response.message);
                setViewsLoading(false)
            } else {
                setError(response.message);
                setViewsLoading(false)
            }
        }
    } catch (error) {
        setError('An error occurred');
        setViewsLoading(false)

    }
}
export default LectureCounterAPI;