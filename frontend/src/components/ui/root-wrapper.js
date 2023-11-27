import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { UserWrapper, FeedbackWrapper } from '../../contexts'
import { ApolloWrapper } from '../../apollo/ApolloWrapper'
import theme from './theme'


export default({element}) => {

    return (
    <ThemeProvider theme={theme}>
        <UserWrapper>
            <FeedbackWrapper>
                <ApolloWrapper>
                {element}
                </ApolloWrapper>
            </FeedbackWrapper>
        </UserWrapper>
    </ThemeProvider>

    )

}




