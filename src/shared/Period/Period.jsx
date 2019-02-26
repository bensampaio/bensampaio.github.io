// @flow

import React, { memo } from 'react';

type PeriodProps = {
    from: {
        year: number,
        month: number,
        day: number,
    },
    to: {
        year: number,
        month: number,
        day: number,
    },
};

const Period = ({ from, to }: PeriodProps) => {
    const { documentElement } = document;

    const lang = documentElement ? documentElement.lang : 'en';

    const fromDate = new Date();
    const toDate = new Date();

    const fromOptions = {};
    const toOptions = {};

    if (from.year) {
        fromDate.setFullYear(from.year);
        fromOptions.year = 'numeric';
    }

    if (from.month) {
        fromDate.setMonth(from.month - 1);
        fromOptions.month = 'long';
    }

    if (to) {
        if (to.year) {
            toDate.setFullYear(to.year);
            toOptions.year = 'numeric';
        }

        if (to.month) {
            toDate.setMonth(to.month - 1);
            toOptions.month = 'long';
        }
    }

    const fromText = fromDate.toLocaleDateString(lang, fromOptions);
    const toText = Object.keys(toOptions).length > 0 ? toDate.toLocaleDateString(lang, toOptions) : 'Now';

    return (
        <span>
            {fromText} - {toText}
        </span>
    );
};

export default memo<PeriodProps>(Period);