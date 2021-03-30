import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HowItWorks() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.circlesContent}>
        <div className={styles.outerCircle}>
          <h2>Metadata</h2>
        </div>
        <div className={styles.innerCircle}>
          <img src="img/herbsjs.svg" alt="logo-herbsJS"/>
          <h2>Domain</h2>
        </div>
        <div className={styles.innerInnerCircleA}>
          <h3>
          <Link to={useBaseUrl('docs/entity')} className={styles.circleLink}>
            Entities
          </Link> 
          </h3>
        </div>
        <div className={styles.innerInnerCircleB}>
          <h3>
            <Link to={useBaseUrl('docs/usecase')} className={styles.circleLink}>
            Use Cases
            </Link> 
          </h3>
        </div>
      </div>
      {/* GLUES */}
      <div className={styles.gridMiddleA}>
        <hr className={styles.line}/>
        <div className={styles.badgeMiddle}>
          <Link to={useBaseUrl('docs/glues/herbsshelf')} className={styles.badgeLink}>
            Herbs Shelf
          </Link>  
        </div>
        <hr className={styles.line}/>
        <div className={styles.arrowRight}/>
      </div>
      <div className={styles.gridMiddleB}>
        <hr className={styles.line}/>
        <div className={styles.badgeMiddle}>
          <Link to={useBaseUrl('docs/glues/herbs2gql')} className={styles.badgeLink}>
          Herbs 2 GraphQL
          </Link>  
          </div>
        <hr className={styles.line}/>
        <div className={styles.arrowRight}/>
      </div>
      <div className={styles.gridMiddleC}>
        <hr className={styles.line}/>
        <div className={styles.badgeMiddle}> 
          <Link to={useBaseUrl('docs/glues/Herbs2knex')} className={styles.badgeLink}>
          Herbs 2 Knex 
          </Link>  
        </div>
        <hr className={styles.line}/>
        <div className={styles.arrowRight}/>
      </div>
      {/* <div className={styles.gridMiddleD}>
        <hr className={styles.line}/>
        <div className={styles.badgeMiddle}>
          <Link to={useBaseUrl('docs/glues/herbs2rpl')} className={styles.badgeLink}>
            Herbs 2 REPL
          </Link>
        </div>
        <hr className={styles.line}/>
        <div className={styles.arrowRight}/>
      </div> */}
      {/* GENERATED CODE */}
      <div className={styles.gridBadgeA}>Shelf-project</div>
      <div className={styles.gridBadgeB}>GraphQL-layer</div>
      <div className={styles.gridBadgeC}>Repository</div>
      {/* <div className={styles.gridBadgeD}>REST-layer</div> */}
    </div>
    <div className={styles.legends}> 
      <div><span className={styles.legendA}/>Your code</div>
      <div><span className={styles.legendB}/>Metadata</div>
      <div><span className={styles.legendC}/>Glues/Plugins</div>
      <div><span className={styles.legendD}/>Generated code</div>
    </div>
    </>
  );
}