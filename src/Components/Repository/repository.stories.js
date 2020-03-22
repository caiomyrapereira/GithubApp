import React from 'react';
import Repository from './index';

export default  { title:'Repos' };


export  const with_title_repos = ()=>(
  <Repository 
    className={'repos'}
    title={'Repos'}
    repos={[]}
  />
)


export  const with_repos = ()=>(
  <Repository 
    className={'repos'}
    title={'Repos'}
    repos={[{
    	id:'1',
    	link:'https://github.com/',
    	name:'name'
    }
    ]}
  />
)

export  const with_title_starred = ()=>(
  <Repository 
    className={'starred'}
    title={'Starred'}
    repos={[]}
  />
)

export  const with_starred = ()=>(
  <Repository 
    className={'starred'}
    title={'Starred'}
    repos={[{
    	id:'1',
    	link:'https://github.com/',
    	name:'name'
    }
    ]}
  />
)