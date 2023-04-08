import axios from "axios";

const searchImages = async (term) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID vWBvkhkG7RlRSKEkkB8prOJUzzf1mdaCbTKDS2DcRBk",
      },
      params: {
        query: term,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export default searchImages;
