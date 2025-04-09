import { CompanyLogo } from "../components";
import Avatar from "../components/Avatar";
import { BellIcon, MoonIcon } from "../assets/icons";
import { BoomBox, ChartLine, ChartNoAxesCombined, ChevronsDown, Cog, FileText, Handshake, LayoutDashboard, Link, Search, ShieldUser, TrendingDown, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

const DashboardPage = () => {

    const [toggleText, setToggleText] = useState(false);

    const iconToRender = [
        {
            icon: <LayoutDashboard />,
            text: "Dashboard"
        },
        {
            icon: <Link />,
            text: "Quick Links"
        },
        {
            icon: <Search />,
            text: "Search"
        },
        {
            icon: <BoomBox />,
            text: "Stack Lookup"
        },
        {
            icon: <Cog />,
            text: "Parts Lookup"
        },
        {
            icon: <Handshake />,
            text: "Co-Op"
        },
        {
            icon: <ChartLine />,
            text: "Sales Inside 2.0"
        },
        {
            icon: <ChartNoAxesCombined />,
            text: "Commission Report"
        },
        {
            icon: <FileText />,
            text: "Document"
        },
        {
            icon: <Users />,
            text: "User Maintenance"
        },
        {
            icon: <ShieldUser />,
            text: "My Settings"
        },
    ];

    const boxData = [
        {
            "title": "Total Customer",
            "value": "7,265",
            "change": "+11.01%",
            "icon": <TrendingUp />,
            "color": "bg-[#F5F2F1]"
        },
        {
            "title": "Total Orders",
            "value": "3,671",
            "change": "-0.03%",
            "icon": <TrendingDown />,
            "color": "bg-[#E5E0DC]"
        },
        {
            "title": "Total Stock",
            "value": "15,689",
            "change": "+15.03%",
            "icon": <TrendingUp />,
            "color": "bg-[#F5F2F1]"
        },
        {
            "title": "Parts Lookup",
            "value": "2,318",
            "change": "+6.08%",
            "icon": <TrendingDown />,
            "color": "bg-[#E5E0DC]"
        }
    ];


    return (
        <div className="p-6">
            <header className="flex justify-between items-center">
                <div className="font-normal text-2xl">
                    Partner Insights
                </div>
                <CompanyLogo />
                <div className="flex items-center justify-center gap-6">
                    <Avatar>
                        <MoonIcon />
                    </Avatar>
                    <Avatar notification={true}>
                        <BellIcon />
                    </Avatar>
                    <Avatar className="bg-[#D6DBDE] text-2xl ">
                        P
                    </Avatar>
                </div>
            </header>
            <div className="relative">
                <div className={`mt-6 px-6 py-4 shadow-sm duration-200 rounded-lg ring-1 ring-gray-200 flex items-center justify-between overflow-hidden ${toggleText ? "h-24" : "h-16"}`}>
                    {iconToRender.map((item, index) => <div key={index} className="p-3 duration-200 cursor-pointer hover:shadow rounded-md flex flex-col items-center justify-center gap-3">
                        <span className="mt-2">
                            {item.icon}
                        </span>
                        <span className={`text-sm duration-200 ${toggleText ? "opacity-100 scale-100 h-full" : "h-0 scale-0 opacity-0"}`}>
                            {item.text}
                        </span>
                    </div>)}
                </div>
                <div className={`absolute left-1/2 -translate-y-1/2 size-8 ring-1 ring-gray-300 rounded-full grid place-content-center bg-white -bottom-8 cursor-pointer hover:shadow duration-200 ${toggleText ? "rotate-180" : ""}`} onClick={() => setToggleText(!toggleText)}>
                    <ChevronsDown />
                </div>
            </div>
            <div className="flex justify-between items-center mt-6">
                <div className="flex justify-between flex-col gap-7">
                    <div className="p-4 ring-1 ring-gray-200 relative rounded-lg text-sm">
                        <Search className="absolute" />
                        <input placeholder="Search Stock lookup, Documents" type="search" className="pl-10" />
                    </div>
                    <div className="text-2xl tracking-wider">
                        Dashboard
                    </div>
                </div>
                <div className="bg-gray-200 text-gray-400 text-xs p-4 w-2/5 rounded-lg">
                    Note : Effective October 28th, 2024, we will be launching new Payment Portal SnapPay.
                    In preparation of the new payment portal our current payment portal will be in maintenance mode beginning midnight October 24th through Monday October 28th.
                    Please note you will need to complete a new registration form on SnapPay to process your payments.
                    Thank you for your patience and cooperation
                </div>
            </div>
            <div className="mt-6 flex items-center gap-7">
                {boxData.map((item, index) => <div key={index} className={`${item.color} p-6 flex flex-1 rounded-lg flex-col gap-2`}>
                    <div className="text-sm ">
                        {item.title}
                    </div>
                    <div className="flex item-center justify-between">
                        <div className="text-3xl">
                            {item.value}
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            {item.change}
                            <span className="scale-75">
                                {item.icon}
                            </span>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default DashboardPage;