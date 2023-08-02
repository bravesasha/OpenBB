"""Share Statistics Data Model."""


from datetime import date as dateType

from pydantic import Field

from openbb_provider.abstract.data import Data
from openbb_provider.abstract.query_params import QueryParams
from openbb_provider.descriptions import QUERY_DESCRIPTIONS
from openbb_provider.models.base import BaseSymbol


class ShareStatisticsQueryParams(QueryParams, BaseSymbol):
    """Share Statistics Query."""


class ShareStatisticsData(Data, BaseSymbol):
    """Return Share Statistics Data."""

    date: dateType = Field(description=QUERY_DESCRIPTIONS.get("date", ""))
    free_float: float = Field(
        description="The percentage of unrestricted shares of a publicly-traded company."
    )
    float_shares: float = Field(
        description="The number of shares available for trading by the general public."
    )
    outstanding_shares: float = Field(
        description="The total number of shares of a publicly-traded company."
    )
    source: str = Field(description="Source of the received data.")
