import { chainPropTypes } from "@mui/utils";
import React from "react";

import { useSelector } from "react-redux";
import { selectComments } from "../feed/feedSlice";

export default function Comments(){

const comments = useSelector(selectComments)
    
}