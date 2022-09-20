import { mergeStyles } from '@fluentui/merge-styles';
import React from 'react';
import * as styles from './styles';

export const MainSection = () =>{
    return(
        <div>
            <p className = {styles.name}>Evan Ryan</p>
            <div className = {styles.bio}>
                <p>This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. </p>
            </div>
        </div>
    )
}