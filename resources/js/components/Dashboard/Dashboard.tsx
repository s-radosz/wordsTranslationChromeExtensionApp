import * as React from "react";
import WORDSACTIONS from "../../modules/actions/wordsActions";
import USERACTIONS from "../../modules/actions/userActions";
import { connect } from "react-redux";
import { handleGetRequest, handleRemoveRequest } from "./../helpers/api"
import WordsList from "./WordsList/WordsList"
import Statistics from "./Statistics/Statistics"
import IllustrationModal from "./IllustrationModal/IllustrationModal"

const Dashboard = ({ words, user, config, createWords, removeWord, updateUserWordsCounts }) => {
    const [showIllustrationModal, setShowIllustrationModal] = React.useState(false);
    const [currentWordIdIllustration, setCurrentWordIdIllustration] = React.useState(0)

    const getUserWordCounts = async () => {
        if (user.id && user.token) {
            try {
                let wordsCount = await handleGetRequest(`${config.paths.API_URL}/words/counts/${user.id}`, user.token)

                let wordsCountResult = {
                    //@ts-ignore
                    wordsOverallCount: wordsCount.wordsOverallCount,
                    //@ts-ignore
                    wordsWeekCount: wordsCount.wordsWeekCount,
                    //@ts-ignore
                    wordsTodayCount: wordsCount.wordsTodayCount
                }

                updateUserWordsCounts(wordsCountResult)
            } catch (err) {
                console.log(err)
            }
        }
    }

    const handleCheckWordsList = async () => {
        if (words.length === 0 && user.id && user.token) {
            let wordsResult = await handleGetRequest(`${config.paths.API_URL}/words/all/${user.id}`, user.token)
            createWords(wordsResult)
        }
    }

    const handleRemoveWord = async (id) => {
        await handleRemoveRequest(`${config.paths.API_URL}/words/remove`,
            {
                data: {
                    id: id
                },
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })

        removeWord(id)
    }

    const handlePageClick = async (pageData, searchData) => {
        let wordsResult = await handleGetRequest(`${config.paths.API_URL}/words/all/${user.id}?page=${pageData.selected + 1}`, user.token)
        createWords(wordsResult)
    }

    const handleAddIllustration = (id) => {
        console.log(["id", id])

        setShowIllustrationModal(true)
        setCurrentWordIdIllustration(id)
    }

    React.useEffect(() => {
        getUserWordCounts();
        handleCheckWordsList();
    }, [user.id])

    return (
        <div className="dashboard">
            <Statistics user={user} />

            <WordsList
                handlePageClick={handlePageClick}
                handleRemoveWord={handleRemoveWord}
                handleAddIllustration={handleAddIllustration}
            />

            {showIllustrationModal &&
                <IllustrationModal
                    setShowIllustrationModal={setShowIllustrationModal}
                    currentWordIdIllustration={currentWordIdIllustration}
                />
            }
        </div>
    )
}
const mapStateToProps = state => ({
    user: state.user,
    words: state.words || [],
    config: state.config
});

const mapDispatchToProps = dispatch => ({
    createWords: user => dispatch(WORDSACTIONS.createWords(user)),
    removeWord: id => dispatch(WORDSACTIONS.removeWord(id)),
    updateUserWordsCounts: payload => dispatch(USERACTIONS.updateUserWordsCounts(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);