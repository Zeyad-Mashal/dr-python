const URL = "https://back.dr-python.center/student/lectureDetails/";
const USER_TOKEN = localStorage.getItem("USER_TOKEN")
const LecturesDetailsAPI = async (setError, setGetLoading, setLectureDetails, subjectId, lectureId) => {
    setGetLoading(true)
    try {
        const response = await fetch(`${URL}${subjectId}/${lectureId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `drpz0${USER_TOKEN}`
            },
        });

        const result = await response.json();

        if (response.ok) {
            setLectureDetails(result.lecture)
            setGetLoading(false)
        } else {
            if (response.status == 404) {
                setError(result.message);
                setGetLoading(false)
            } else {
                setError(response.message);
                setGetLoading(false)
            }
        }
    } catch (error) {
        setError('An error occurred');
        setGetLoading(false)

    }
}
export default LecturesDetailsAPI;