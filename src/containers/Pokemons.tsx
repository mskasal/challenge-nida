// import { Pokemons } from '../components/Pokemons';
import * as React from 'react';
import { getPokeListAsync } from '../actions';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Limit } from '../types';
import Pokemon from './Pokemon';

interface Props {
    pokemons: {
        results: Array<any>
    };
}

interface State {
    limit: Limit;
}

interface DispatchFromProps {
    getPokeList: any;
}

class Pokemons extends React.Component<Props & DispatchFromProps, State> {
    constructor(props: Props & DispatchFromProps) {
        super(props);
        this.state = {
            limit: 10
        };
    }
    componentWillMount() {
        const { limit } = this.state;
        
        getPokeListAsync(limit);
    }
    componentWillReceiveProps(nextProps: Props) {
        console.log(nextProps, this.props, "12313123");
    }
    render() {
        const { pokemons: { results } } = this.props;
        return (
            <div className="Pokemons">
                <div>
                {
                    (results) && results.map(
                        (pokemon, index) =>
                            <div>
                                <Pokemon { ...pokemon } index={index} />
                            </div>
                    )
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState) => {
  return {
    pokemons: state.pokemons
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getPokeList: (limit: Limit) => dispatch(getPokeListAsync(limit))
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pokemons as any);