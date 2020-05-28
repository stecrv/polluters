import React from 'react';
import { makeStyles } from '@bit/mui-org.material-ui.styles';
import List from '@bit/mui-org.material-ui.list';
import ListItem from '@bit/mui-org.material-ui.list-item';
import ListItemText from '@bit/mui-org.material-ui.list-item-text';
import Typography from '@bit/mui-org.material-ui.typography';
import ExpansionPanel from '@bit/mui-org.material-ui.expansion-panel';
import ExpansionPanelSummary from '@bit/mui-org.material-ui.expansion-panel-summary';
import ExpansionPanelDetails from '@bit/mui-org.material-ui.expansion-panel-details';
import ExpandMoreIcon from '@bit/mui-org.material-ui-icons.expand-more';

import styled from 'styled-components';

import { get } from 'lodash';

const StyledLabel = styled.span`
  font-weight: 600;
`;
const StyledArea = styled.div`
  margin-bottom: 10px;
`;

const useStyles = makeStyles(() => ({
  root: {
    width: 360,
    backgroundImage: 'linear-gradient(to bottom, #cb0000, #f0db14)',
    backgroundSize: '10px auto',
    backgroundRepeat: 'no-repeat',
  },
  inline: {
    display: 'inline',
  },
  block: {
    display: 'block',
    color: 'rgba(0, 0, 0, 0.54)',
  },
  heading: {
    fontWeight: 'regular',
    color: 'rgba(0, 0, 0, 0.54)',
  },
}));

const LabelElement = ({ children }) => {
  const classes = useStyles();

  return (<Typography variant="body1" component="span" className={classes.block}>{children}</Typography>);
};

export const PollutersListVisual = ({ data }) => {
  const classes = useStyles();
  const hasData = Boolean(data.length);


  const displayName = (el) => (
    <Typography variant="h6" component="h2" className={classes.block}>
      {el.Rank}
      {' '}
      <strong>{el.Name}</strong>
    </Typography>
  );

  const displayLocationInfos = (el) => (
    <>
      {get(el, 'HQ') ? (
        <LabelElement>
          <StyledLabel>HQ Location:</StyledLabel>
          {' '}
          {el.HQ}
        </LabelElement>
      ) : ''}
      {get(el, 'Ownership') ? (
        <LabelElement>
          <StyledLabel>Ownership:</StyledLabel>
          {' '}
          {el.Ownership}
        </LabelElement>
      ) : ''}
    </>
  );

  const displayCEOInfos = (el) => (
    <>
      <LabelElement>
        {get(el, 'CEO pay') ? (
          <>
            <StyledLabel>CEO</StyledLabel>
            :
            {' '}
            {el.CEO}
            {' '}
            - pay:
            {' '}
            {el['CEO pay']}
          </>
        ) : (
          <>
            <StyledLabel>CEO</StyledLabel>
            :
            {' '}
            {el.CEO}
          </>
        )}
      </LabelElement>
    </>
  );

  const displayInfos = (el, key) => (
    <>
      {get(el, key) ? (
        <LabelElement>
          <StyledLabel>{key}</StyledLabel>
          :
          {' '}
          {el[key]}
        </LabelElement>
      ) : ''}
    </>
  );

  return (
    <>
      <Typography component="h3" variant="h3" gutterBottom>Ranked List</Typography>
      <List className={classes.root}>
        {hasData && data.map((el) => (
          <>
            <ListItem alignItems="flex-start" divider key={el}>
              <ListItemText
                primary={displayName(el)}
                secondary={(
                  <>
                      <StyledArea>
                          {displayLocationInfos(el)}
                          {displayInfos(el, 'Revenue')}
                          {displayCEOInfos(el)}
                        </StyledArea>
                      <ExpansionPanel square >
                          <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="`panel-content`"
                              id="panel-header"
                            >
                              <Typography className={classes.heading}>Read more...</Typography>
                            </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                              <Typography variant="body1" component="span" className={classes.block}>
                                        {displayInfos(el, 'Global emissions 1965-2017')}
                                        {displayInfos(el, 'Projected future emissions 2018-30')}
                                        {displayInfos(el, 'Projected increase in production 2018-30')}
                                        {displayInfos(el, 'Fossil fuel production')}
                                        {displayInfos(el, 'Investment in renewables')}
                                        {displayInfos(el, 'Future projects')}
                                        {displayInfos(el, 'Environmental disaster')}
                                      </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                    </>
                                                )}
              />
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
};
