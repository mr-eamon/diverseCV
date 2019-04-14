import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import blue from '@material-ui/core/colors/blue';

import { fetchUsers } from './services/api.service';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

class SimpleExpansionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    this.handleChipClick = this.handleChipClick.bind(this);
  }

  componentDidMount() {
    fetchUsers()
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChipClick(ev) {
    console.log('Hitting the chip click');
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      { this.state.users.length > 0 &&
        this.state.users.map(document => (
          <ExpansionPanel key={document.document_id}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{document.document_id}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <iframe src={`https://s3-eu-west-1.amazonaws.com/diversecv-documents/${document.document_id}-redacted.pdf`} width='50%' height='500px' />
              <Chip
                label='Accept'
                clickable
                className={classes.chip}
                color="primary"
                onClick={this.handleChipClick}
              />
              <Chip
                label='Reject'
                clickable
                className={classes.chip}
                color="secondary"
                onClick={this.handleChipClick}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))
      }
      </div>
    );
  }
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);