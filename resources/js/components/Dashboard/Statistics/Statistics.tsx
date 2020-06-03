import * as React from "react";
import SingleStat from "./SingleStat/SingleStat"

type userType = {
    user: {
        countSavedWordsOverall: number,
        countSavedWordsLastWeek: number,
        countSavedWordsToday: number
    }
}

const Statistics = ({ user }: userType) => {
    return (
        <div className="dashboard-statistics">
            <SingleStat
                number={user.countSavedWordsOverall}
                text="overall saved"
            />

            <SingleStat
                number={user.countSavedWordsLastWeek}
                text="weekly saved"
            />

            <SingleStat
                number={user.countSavedWordsToday}
                text="today saved"
            />
        </div>
    )
}

export default Statistics;