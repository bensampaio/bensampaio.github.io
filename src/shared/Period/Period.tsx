import { useRouter } from 'next/router';
import { FC, memo } from 'react';

type Props = {
    from: {
        year?: number;
        month?: number;
        day?: number;
    };
    to?: null | {
        year?: number;
        month?: number;
        day?: number;
    };
};

const Period: FC<Props> = ({ from, to }) => {
    const router = useRouter();

    const lang = router.locale || 'en';

    const fromDate = new Date();
    const toDate = new Date();

    const fromOptions: Intl.DateTimeFormatOptions = {};
    const toOptions: Intl.DateTimeFormatOptions = {};

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
    const toText =
        Object.keys(toOptions).length > 0
            ? toDate.toLocaleDateString(lang, toOptions)
            : 'Now';

    return (
        <span>
            {fromText} - {toText}
        </span>
    );
};

export default memo<Props>(Period);
