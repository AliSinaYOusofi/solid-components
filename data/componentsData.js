// componentsData.js

import { IoHeartDislikeCircleOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa6";
import { TbSpeakerphone } from "react-icons/tb";
import { SiGoogleforms } from "react-icons/si";

const componentsData = [
    {
        title: "Cards",
        icon: <FaRegAddressCard size={40} />,
        description: "10 Components",
    },
    {
        title: "Hero Section",
        icon: <IoHeartDislikeCircleOutline size={40} />,
        description: "5 Components",
    },
    {
        title: "Alerts",
        icon: <TbSpeakerphone size={40}/>,
        description: "5 Components",
    },
    {
        title: "Forms",
        icon: <SiGoogleforms size={40} />,
        description: "5 Components",
    },
];

export default componentsData