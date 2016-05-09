class LottoController < ApplicationController
    def lottop
    # 	@lotto_list = []
    #     i = 1
    #     while i < 51
    #         @lotto_list.push(i)
    #         i += 1
    #     end
        
    # 	@selected = []
    #     j = 1
    #     while j < 7
    #         sampleone = @lotto_list.sample
    #         a = @selected.include?(sampleone)
    #         if a
    #             sampleone = @lotto_list.sample
    #         end
    #         @selected.push(sampleone)
    #         j += 1
    #     end
        
        @lotto_list = (1..50).to_a
        @selected = @lotto_list.sample(6).sort
    end
end
