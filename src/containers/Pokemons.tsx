// import { Pokemons } from '../components/Pokemons';
import * as React from 'react';
import { getPokeListAsync } from '../actions';
import { PokeState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import { Limit, PokeAction } from '../types';

interface Props {
    data: Array<any>;
};

interface State {
    limit: number;
};

interface DispatchFromProps {
    getPokeList: any;
};

class Pokemons extends React.Component<Props & DispatchFromProps, State> {
    constructor(props: Props & DispatchFromProps) {
        super(props);
        this.state = {
            limit: 10
        };
    }
    componentWillMount() {
        const { getPokeList } = this.props;
        const { limit } = this.state;
        getPokeList(limit);
    }

    render() {
        return (
            <div className="Pokemons">
                <div className="greeting">
                    asdsd
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: PokeState) => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = (dispatch: Dispatch<PokeAction>) => {
  return {
    getPokeList: (limit: Limit) => dispatch(getPokeListAsync(limit))
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pokemons);