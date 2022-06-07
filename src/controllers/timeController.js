const time = async (req, res) => {
  try {

  const epochTime = Math.floor(Date.now() / 1000);
  const serverTime = Date.now()
    

    res.status(200).json([epochTime, serverTime]);

  } catch (error) {
    res.status(500).json(error);
  }
};

export default time