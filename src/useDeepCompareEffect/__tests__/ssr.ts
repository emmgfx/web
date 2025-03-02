import { renderHook } from '@testing-library/react-hooks/server';
import { useDeepCompareEffect } from '../..';

describe('useDeepCompareEffect', () => {
	it('should be defined', () => {
		expect(useDeepCompareEffect).toBeDefined();
	});

	it('should render', () => {
		const { result } = renderHook(() => {
			useDeepCompareEffect(() => {}, []);
		});
		expect(result.error).toBeUndefined();
	});
});
