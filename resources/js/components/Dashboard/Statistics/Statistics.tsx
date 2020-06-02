import * as React from "react";

const Statistics = ({ user }) => {
    return (
        <div className="dashboard-statistics">
            <div className="dashboard-statistics__single">
                Saved {user.countSavedWordsOverall} overall
            </div>

            <div className="dashboard-statistics__single">
                Saved {user.countSavedWordsLastWeek} weekly
            </div>

            <div className="dashboard-statistics__single">
                Saved {user.countSavedWordsToday} today
            </div>
        </div>
    )
}

export default Statistics;