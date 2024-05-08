import axios from "axios";

export const getProjects = async () => {
    try {
        const response = await axios.get('http://localhost:5281/projects', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        // Process the response data here
        return response.data
    } catch (error) {
        // Handle error here
        console.error(error);
    }

}

export const getTruthData = async () => {
    try {
        const response = await axios.get('http://localhost:5281/projects/get-truth-data', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        // Process the response data here
        return response.data
    } catch (error) {
        // Handle error here
        console.error(error);
    }
};

export const getWorkExperience = async () => {
    try {
        const response = await axios.get('http://localhost:5281/work-experience', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        // Process the response data here
        return response.data
    } catch (error) {
        // Handle error here
        console.error(error);
    }
}

export const getEducation = async() => {
    try {
        const response = await axios.get('http://localhost:5281/education', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        // Process the response data here
        return response.data
    } catch (error) {
        // Handle error here
        console.error(error);
    }
}

export const sendEmail = async(emailData : any) => {
    try {
        const response = await axios.post('http://localhost:5281/send-email', emailData, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        return {data: response.data, error: null}
    } catch (error) {
        return {data: null, error: error}
    }
}