import ISocialMedia from "./../model/ISocialMedia";

export const addSocialMedia = ({
  newData,
  setData,
}: {
  newData: ISocialMedia;
  setData: React.Dispatch<React.SetStateAction<ISocialMedia[]>>;
}) => {
  setData((prevState) => {
    const updatedData = [...prevState, newData];

    localStorage.setItem("socialMedia", JSON.stringify(updatedData, null, 2));

    return updatedData;
  });
};
