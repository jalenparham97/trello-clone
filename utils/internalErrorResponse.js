const internalErrorResponse = (error,res)=>{
    return res.status(500).json(error);
};

export default internalErrorResponse;