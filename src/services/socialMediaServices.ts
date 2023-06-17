import ISocialMedia from "./../model/ISocialMedia";

export const addSocialMedia = ({
  newData,
  setData,
}: {
  newData: ISocialMedia; // Represents the new social media data to be added
  setData: React.Dispatch<React.SetStateAction<ISocialMedia[]>>; // Function to update the state with new data
}) => {
  setData((prevState) => {
    // Update the state by appending the new data to the previous state
    const updatedData = [...prevState, newData];

    // Store the updated data in localStorage as a string
    localStorage.setItem("socialMedia", JSON.stringify(updatedData, null, 2));

    return updatedData; // Return the updated data as the new state
  });
};
