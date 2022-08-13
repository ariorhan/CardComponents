const contacts = [
  {
    name: "Beyonce",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    email: "b@beyonce.com"
  },
  {
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com"
  },
  {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  },
  {
    name: "Shakira",
    imgURL:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwMTgyMTgzOTk3MDg4ODkw/gettyimages-483195065.jpg",
    phone: "+918 372 559",
    email: "gmail@shakira.com"
  },
   {
    name: "Ricky Martin",
    imgURL:
      "data:image/jpeg;base64,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",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com"
  }
];

export default contacts;
