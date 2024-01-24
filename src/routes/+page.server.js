import { supabase } from '$lib/supabaseClient';

export const load = async () => {
	const { data: characterData } = await supabase
		.from('characters')
		.select(
			`
    *,
    appearances (
      *
    )
  `
		)
		.order('id');
	return {
		characters: characterData ?? []
	};
};
